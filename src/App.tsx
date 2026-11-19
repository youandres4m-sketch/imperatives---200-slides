import { useCallback, useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
  RotateCcw,
} from 'lucide-react';
import { SLIDES, validateSlidesDataset } from './data/slides';

const VALIDATION = validateSlidesDataset(SLIDES);

interface SlideState {
  index: number;
  isRevealed: boolean;
}

function getAdaptiveTypography(spanish: string, english: string): {
  spanishClass: string;
  englishClass: string;
} {
  const maxLength = Math.max(spanish.length, english.length);

  if (maxLength <= 12) {
    return {
      spanishClass: 'text-[clamp(3.25rem,9vw,7.75rem)]',
      englishClass: 'text-[clamp(2rem,5vw,4.25rem)]',
    };
  }
  if (maxLength <= 22) {
    return {
      spanishClass: 'text-[clamp(2.5rem,6.8vw,5.75rem)]',
      englishClass: 'text-[clamp(1.65rem,4.2vw,3.5rem)]',
    };
  }
  if (maxLength <= 32) {
    return {
      spanishClass: 'text-[clamp(2rem,5vw,4.5rem)]',
      englishClass: 'text-[clamp(1.45rem,3.4vw,2.85rem)]',
    };
  }
  return {
    spanishClass: 'text-[clamp(1.6rem,3.9vw,3.65rem)]',
    englishClass: 'text-[clamp(1.3rem,2.8vw,2.4rem)]',
  };
}

export default function App() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [slideState, setSlideState] = useState<SlideState>({
    index: 0,
    isRevealed: false,
  });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleStart = useCallback(() => {
    setSlideState({ index: 0, isRevealed: false });
    setHasStarted(true);
  }, []);

  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[slideState.index];

  const handleRestart = useCallback(() => {
    setSlideState({ index: 0, isRevealed: false });
  }, []);

  const handleToggleReveal = useCallback(() => {
    setSlideState((prev) => ({
      ...prev,
      isRevealed: !prev.isRevealed,
    }));
  }, []);

  const handlePrev = useCallback(() => {
    setSlideState((prev) => ({
      index: Math.max(0, prev.index - 1),
      isRevealed: false,
    }));
  }, []);

  const handleNext = useCallback(() => {
    setSlideState((prev) => ({
      index: Math.min(totalSlides - 1, prev.index + 1),
      isRevealed: false,
    }));
  }, [totalSlides]);

  const handleToggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen may be restricted by browser or iframe permissions
    }
  }, []);

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', syncFullscreenState);
    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreenState);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      if (!hasStarted) {
        if (event.code === 'Space' || event.key === ' ' || event.key === 'Enter') {
          event.preventDefault();
          if (event.repeat) {
            return;
          }
          setSlideState({ index: 0, isRevealed: false });
          setHasStarted(true);
        }
        return;
      }

      if (event.code === 'Space' || event.key === ' ') {
        event.preventDefault();
        if (event.repeat) {
          return;
        }
        setSlideState((prev) => {
          if (!prev.isRevealed) {
            return { index: prev.index, isRevealed: true };
          }
          if (prev.index < totalSlides - 1) {
            return { index: prev.index + 1, isRevealed: false };
          }
          return prev;
        });
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setSlideState((prev) => ({
          index: Math.min(totalSlides - 1, prev.index + 1),
          isRevealed: false,
        }));
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setSlideState((prev) => ({
          index: Math.max(0, prev.index - 1),
          isRevealed: false,
        }));
        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSlideState((prev) => (prev.isRevealed ? prev : { ...prev, isRevealed: true }));
        return;
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSlideState((prev) => (!prev.isRevealed ? prev : { ...prev, isRevealed: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasStarted, totalSlides]);

  if (!VALIDATION.valid) {
    return (
      <main className="min-h-screen bg-white text-slate-900 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full border border-red-200 bg-red-50 rounded-lg p-6">
          <h1 className="text-xl font-bold text-red-900 mb-3">
            Slide Dataset Validation Failed
          </h1>
          <ul className="list-disc pl-5 space-y-1 text-sm text-red-800 font-mono">
            {VALIDATION.errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      </main>
    );
  }

  if (!hasStarted) {
    return (
      <div className="min-h-[100dvh] h-[100dvh] w-full bg-white text-slate-900 flex flex-col justify-between overflow-hidden select-none">
        <header className="w-full px-5 sm:px-10 md:px-14 pt-5 sm:pt-7 pb-3 flex items-center justify-end shrink-0">
          <button
            type="button"
            onClick={(e) => {
              e.currentTarget.blur();
              void handleToggleFullscreen();
            }}
            title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            className="min-h-[40px] min-w-[40px] p-2 inline-flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 cursor-pointer"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            ) : (
              <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            )}
          </button>
        </header>

        <main className="flex-1 w-full max-w-4xl mx-auto px-6 sm:px-12 flex flex-col items-center justify-center text-center min-h-0">
          <h1 className="text-[clamp(3.25rem,10vw,7.5rem)] font-extrabold tracking-tight leading-[1.08] text-slate-950">
            Imperatives
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base font-medium text-slate-500">
            200 Slides · 11 Sections
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.currentTarget.blur();
              handleStart();
            }}
            className="mt-10 sm:mt-12 min-h-[48px] px-10 py-3.5 text-base sm:text-lg font-semibold text-white bg-slate-900 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 cursor-pointer"
          >
            Start
          </button>
        </main>

        <footer className="w-full px-5 sm:px-10 md:px-14 py-5 flex items-center justify-center text-xs sm:text-sm text-slate-400 shrink-0">
          <span>
            Press <span className="font-mono font-semibold text-slate-600">SPACE</span> or{' '}
            <span className="font-mono font-semibold text-slate-600">ENTER</span> to begin
          </span>
        </footer>
      </div>
    );
  }

  const formattedSlideNumber = String(currentSlide.id).padStart(3, '0');
  const progressPercent = (currentSlide.id / totalSlides) * 100;
  const { spanishClass, englishClass } = getAdaptiveTypography(
    currentSlide.spanish,
    currentSlide.english
  );

  return (
    <div className="min-h-[100dvh] h-[100dvh] w-full bg-white text-slate-900 flex flex-col justify-between overflow-hidden select-none">
      {/* Top Bar */}
      <header className="w-full px-5 sm:px-10 md:px-14 pt-5 sm:pt-7 pb-3 flex items-center justify-between gap-4 sm:gap-8 shrink-0">
        <div className="min-w-0 flex flex-col gap-0.5">
          <p className="text-xs sm:text-sm md:text-base font-medium text-slate-500 truncate">
            {currentSlide.sectionTitle}
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <div
            className="flex items-baseline gap-1.5 font-mono tabular-nums"
            aria-label={`Slide ${currentSlide.id} of ${totalSlides}`}
          >
            <span className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              {formattedSlideNumber}
            </span>
            <span className="text-sm sm:text-lg md:text-xl font-medium text-slate-400">
              / {totalSlides}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.currentTarget.blur();
                handleRestart();
              }}
              disabled={slideState.index === 0 && !slideState.isRevealed}
              title="Restart presentation (Slide 1)"
              aria-label="Restart presentation"
              className="min-h-[40px] px-2.5 sm:px-3 py-2 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0 disabled:opacity-35 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">Restart</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.currentTarget.blur();
                void handleToggleFullscreen();
              }}
              title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              className="min-h-[40px] min-w-[40px] p-2 inline-flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 cursor-pointer"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              ) : (
                <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Center Stage */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-16 flex flex-col items-center justify-center text-center min-h-0">
        <div className="w-full flex flex-col items-center justify-center">
          <h1
            className={`${spanishClass} font-extrabold tracking-tight leading-[1.12] text-slate-950 [text-wrap:balance]`}
          >
            {currentSlide.spanish}
          </h1>

          <div
            className="mt-6 sm:mt-10 md:mt-12 w-full flex items-center justify-center"
            aria-live="polite"
          >
            <p
              aria-hidden={!slideState.isRevealed}
              className={`${englishClass} font-bold tracking-tight leading-[1.16] text-blue-800 [text-wrap:balance] transition-[opacity,transform] duration-150 ease-out ${
                slideState.isRevealed
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-1 pointer-events-none'
              }`}
            >
              {currentSlide.english}
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Area */}
      <footer className="w-full shrink-0">
        <div className="px-5 sm:px-10 md:px-14 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-3 sm:gap-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500">
            <span className="whitespace-nowrap">
              <span className="font-mono font-semibold text-slate-700">SPACE</span>: Reveal / Next
            </span>
            <span className="text-slate-300" aria-hidden="true">
              ·
            </span>
            <span className="whitespace-nowrap">
              <span className="font-mono font-semibold text-slate-700">← →</span>: Navigate
            </span>
            <span className="hidden md:inline text-slate-300" aria-hidden="true">
              ·
            </span>
            <span className="hidden md:inline whitespace-nowrap">
              <span className="font-mono font-semibold text-slate-700">↑ ↓</span>: Show / Hide
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-auto">
            <button
              type="button"
              onClick={(e) => {
                e.currentTarget.blur();
                handlePrev();
              }}
              disabled={slideState.index === 0}
              aria-label="Previous slide"
              className="min-h-[40px] px-3 py-2 inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors whitespace-nowrap shrink-0 disabled:opacity-35 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.currentTarget.blur();
                handleToggleReveal();
              }}
              aria-pressed={slideState.isRevealed}
              className="min-h-[40px] px-3.5 sm:px-4 py-2 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-900 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 cursor-pointer"
            >
              {slideState.isRevealed ? (
                <>
                  <EyeOff className="w-4 h-4" aria-hidden="true" />
                  <span>Hide English</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  <span>Show English</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.currentTarget.blur();
                handleNext();
              }}
              disabled={slideState.index === totalSlides - 1}
              aria-label="Next slide"
              className="min-h-[40px] px-3 py-2 inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors whitespace-nowrap shrink-0 disabled:opacity-35 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 cursor-pointer"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Minimalist Progress Bar */}
        <div
          className="w-full h-1.5 bg-slate-100"
          role="progressbar"
          aria-valuenow={currentSlide.id}
          aria-valuemin={1}
          aria-valuemax={totalSlides}
          aria-label="Presentation progress"
        >
          <div
            className="h-full bg-blue-800 transition-[width] duration-200 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </footer>
    </div>
  );
}
