import styles from './FilterGroup.module.css';

// title, inputType ("checkbox" | "radio"), options [{ text, value? }].
// name, selected (array de values) e onChange(value, checked) tornam o grupo controlado.
export default function FilterGroup({ title, inputType = 'checkbox', options = [], name, selected, onChange }) {
  const groupName = name ?? title;
  return (
    <fieldset className={styles.group}>
      <legend className={styles.title}>{title}</legend>
      {options.map((option) => {
        const value = option.value ?? option.text;
        const controlled = Array.isArray(selected);
        return (
          <label key={value} className={styles.option}>
            <input
              type={inputType}
              name={groupName}
              value={value}
              {...(controlled
                ? {
                    checked: selected.includes(value),
                    onChange: (event) => onChange?.(value, event.target.checked),
                  }
                : {})}
            />
            <span>{option.text}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
