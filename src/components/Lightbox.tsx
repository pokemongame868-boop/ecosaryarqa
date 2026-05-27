import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/tourismData';

interface Props {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNav: (index: number) => void;
}

export default function Lightbox({ items, index, onClose, onNav }: Props) {
  const total = items.length;
  const isOpen = index !== null;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNav((index - 1 + total) % total);
  }, [index, total, onNav]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNav((index + 1) % total);
  }, [index, total, onNav]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    },
    [onClose, goPrev, goNext],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKey]);

  if (!isOpen || index === null) return null;

  const item = items[index];

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="lightbox-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Галерея суреті"
    >
      {/* Close */}
      <button className="lightbox-close" onClick={onClose} aria-label="Жабу">
        <X size={22} />
      </button>

      {/* Counter */}
      <div className="lightbox-counter" aria-live="polite">
        {index + 1} / {total}
      </div>

      {/* Prev arrow */}
      <button
        className="lightbox-arrow lightbox-arrow--prev"
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        aria-label="Алдыңғы сурет"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Image area */}
      <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
        {item.imageUrl ? (
          <img
            key={item.id}
            src={item.imageUrl}
            alt={item.caption}
            className="lightbox-img"
          />
        ) : (
          <div
            key={item.id}
            className="lightbox-img-fallback"
            style={{ background: item.gradient }}
            aria-label={item.caption}
          />
        )}
        <p className="lightbox-caption">{item.caption}</p>
      </div>

      {/* Next arrow */}
      <button
        className="lightbox-arrow lightbox-arrow--next"
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        aria-label="Келесі сурет"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
