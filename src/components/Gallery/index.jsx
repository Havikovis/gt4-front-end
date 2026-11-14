import { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import styles from './Gallery.module.css';

const toNumber = (value) => (value === undefined ? undefined : parseFloat(value));

// images: [{ src }], width, height, radius, showThumbs, className
export default function Gallery({
  images = [],
  width = '100%',
  height,
  radius = '0px',
  showThumbs = false,
  className = '',
}) {
  const [current, setCurrent] = useState(0);
  const last = images.length - 1;

  const w = toNumber(width);
  const h = toNumber(height);
  // width/height funcionam como tamanho maximo; a galeria encolhe mantendo a proporcao
  const frameStyle = {
    width: typeof width === 'number' ? `${width}px` : String(width).includes('%') ? width : `${w}px`,
    maxWidth: '100%',
    ...(w && h ? { aspectRatio: `${w} / ${h}` } : { height: h ? `${h}px` : undefined }),
    borderRadius: radius,
  };

  return (
    <div className={`${styles.gallery} ${className}`} style={{ width: frameStyle.width, maxWidth: '100%' }}>
      <div className={styles.frame} style={frameStyle}>
        <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={image.src + index}
              className={styles.slide}
              src={image.src}
              alt={`Imagem ${index + 1} de ${images.length}`}
              draggable="false"
            />
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.left}`}
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.right}`}
          onClick={() => setCurrent((c) => Math.min(last, c + 1))}
          disabled={current === last}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <div className={styles.thumbs}>
          {images.map((image, index) => (
            <button
              key={image.src + index}
              type="button"
              className={`${styles.thumb} ${index === current ? styles.thumbActive : ''}`}
              style={{ borderRadius: radius }}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagem ${index + 1}`}
              aria-current={index === current}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
