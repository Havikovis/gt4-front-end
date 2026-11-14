import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from './Layout.jsx';
import Section from '../components/Section/index.jsx';
import ProductListing from '../components/ProductListing/index.jsx';
import FilterGroup from '../components/FilterGroup/index.jsx';
import { filterGroups, products } from '../data/products.js';
import styles from './ProductListingPage.module.css';

// remove acentos e caixa para a busca por texto
const normalize = (text) =>
  String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

const effectivePrice = (product) => product.priceDiscount ?? product.price;

const emptyFilters = { brand: [], category: [], gender: [], state: [] };

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const filterText = searchParams.get('filter') ?? '';

  const [sort, setSort] = useState('');
  const [filters, setFilters] = useState(emptyFilters);

  const handleFilterChange = (group, inputType) => (value, checked) => {
    setFilters((current) => {
      if (inputType === 'radio') {
        return { ...current, [group]: [value] };
      }
      const next = checked ? [...current[group], value] : current[group].filter((item) => item !== value);
      return { ...current, [group]: next };
    });
  };

  const visibleProducts = useMemo(() => {
    const term = normalize(filterText.trim());

    const result = products.filter((product) => {
      const matchesText =
        !term ||
        [product.name, product.brand, product.category, product.type].some((field) =>
          normalize(field).includes(term)
        );
      const matchesGroups = Object.entries(filters).every(
        ([group, selected]) => selected.length === 0 || selected.includes(product[group])
      );
      return matchesText && matchesGroups;
    });

    if (sort === 'asc') return [...result].sort((a, b) => effectivePrice(a) - effectivePrice(b));
    if (sort === 'desc') return [...result].sort((a, b) => effectivePrice(b) - effectivePrice(a));
    return result;
  }, [filterText, filters, sort]);

  const total = visibleProducts.length;
  const countText = `${total} ${total === 1 ? 'produto' : 'produtos'}`;
  const title = filterText ? `Resultados para “${filterText}” - ${countText}` : countText;
  const hasActiveFilters = Object.values(filters).some((list) => list.length > 0) || sort !== '';

  const clear = () => {
    setFilters(emptyFilters);
    setSort('');
  };

  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        <aside className={styles.sidebar}>
          <div className={styles.filterBox}>
            <h3 className={styles.filterTitle}>Filtrar por</h3>
            <hr />
            {filterGroups.map((group) => (
              <FilterGroup
                key={group.key}
                name={group.key}
                title={group.title}
                inputType={group.inputType}
                options={group.options.map((text) => ({ text }))}
                selected={filters[group.key]}
                onChange={handleFilterChange(group.key, group.inputType)}
              />
            ))}
            {hasActiveFilters && (
              <button type="button" className={styles.clear} onClick={clear}>
                Limpar filtros
              </button>
            )}
          </div>
        </aside>

        <div className={styles.content}>
          <Section
            title={title}
            titleAlign="left"
            action={
              <div className={styles.sortBox}>
                <label htmlFor="sort" className={styles.sortLabel}>
                  Ordenar por
                </label>
                <select id="sort" value={sort} onChange={(event) => setSort(event.target.value)}>
                  <option value="">Mais relevantes</option>
                  <option value="asc">Menor preço</option>
                  <option value="desc">Maior preço</option>
                </select>
              </div>
            }
          >
            {total > 0 ? (
              <ProductListing products={visibleProducts} columns={3} />
            ) : (
              <p className={styles.empty}>Nenhum produto encontrado. Tente outros filtros.</p>
            )}
          </Section>
        </div>
      </div>
    </Layout>
  );
}
