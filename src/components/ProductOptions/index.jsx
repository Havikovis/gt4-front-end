import { useState } from 'react';
import styles from './ProductOptions.module.css';

// options: ["39", "41"] ou ["#000", "#111"]. shape: "square" | "circle". type: "text" | "color".
export default function ProductOptions({
  options = [],
  radius = '4px',
  shape = 'square',
  type = 'text',
  onChange,
}) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    onChange?.(option);
  };

  return (
    <div className={styles.options} role="group">
      {options.map((option) => {
        const isCircle = shape === 'circle';
        const style = {
          ...(isCircle ? {} : { borderRadius: radius }),
          ...(type === 'color' ? { backgroundColor: option } : {}),
        };
        return (
          <button
            key={option}
            type="button"
            className={`${styles.option} ${isCircle ? styles.circle : styles.square} ${
              selected === option ? styles.selected : ''
            }`}
            style={style}
            onClick={() => handleSelect(option)}
            aria-pressed={selected === option}
            aria-label={type === 'color' ? `Cor ${option}` : `Opção ${option}`}
          >
            {type === 'text' ? option : null}
          </button>
        );
      })}
    </div>
  );
}
