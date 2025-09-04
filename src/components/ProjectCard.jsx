import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function MediaSlide({ item, title, className = "" }) {
    if (item.type === "video") {
        return (
            <video
                className={`w-full h-full object-contain ${className}`}
                src={item.src}
                poster={item.poster}
                controls
                playsInline
            />
        );
    }
    return (
        <img
            src={item.src}
            alt={item.alt || title}
            className={`w-full h-full object-contain ${className}`}
            loading="lazy"
        />
    );
}

export default function ProjectCard({
    title,
    image,
    madeWith = [],
    description,
    liveUrl,
    repoUrl,
    flip = false,
    gallery = null,
}) {
    const hasGallery = Array.isArray(gallery) && gallery.length > 0;
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
            if (e.key === "ArrowRight") setIdx((i) => (i + 1) % gallery.length);
            if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + gallery.length) % gallery.length);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, gallery?.length]);

    const openLightboxAt = (i) => {
        setIdx(i);
        setOpen(true);
    };

    return (
        <article
            className={`grid items-center gap-10 md:grid-cols-2 ${flip ? "md:[&>div:first-child]:order-2" : ""}`}
        >
            <div className="relative group">
                {hasGallery ? (
                    <div className="relative">
                        <MediaSlide
                            item={gallery[idx]}
                            title={title}
                            className="rounded-2xl border border-green-500/20 shadow-[0_0_0_1px_rgba(236,72,153,0.25)]"
                        />

                        {/* visible even when not fullscreen */}
                        <button
                            type="button"
                            onClick={() => setIdx((i) => (i - 1 + gallery.length) % gallery.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2
                   p-4 md:p-5 rounded-full bg-black/50 hover:bg-black/60
                   text-white text-2xl md:text-3xl leading-none"
                            aria-label="Previous media"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => setIdx((i) => (i + 1) % gallery.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2
                   p-4 md:p-5 rounded-full bg-black/50 hover:bg-black/60
                   text-white text-2xl md:text-3xl leading-none"
                            aria-label="Next media"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => openLightboxAt(idx)}
                            className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded-full
                   bg-black/60 text-white border border-white/20"
                            aria-label={`Open media gallery for ${title}`}
                        >
                            Expand • {gallery.length}
                        </button>
                    </div>
                ) : (
                    <img
                        src={image}
                        alt={title}
                        className="w-full rounded-2xl border border-green-500/20 shadow-[0_0_0_1px_rgba(236,72,153,0.25)]"
                    />
                )}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-yellow-500/40 blur-[1.5px]"></div>
            </div>
            <div>
                <h3 className="text-4xl font-semibold tracking-tight">{title}</h3>

                <p className="mt-3 text-sm text-slate-400">Made with:</p>
                <ul className="mt-1 flex flex-wrap gap-2">
                    {madeWith.map((t) => (
                        <li
                            key={t}
                            className="text-sm px-2.5 py-1 rounded-full bg-yellow-600/10 text-yellow-300 border border-yellow-500/20"
                        >
                            {t}
                        </li>
                    ))}
                </ul>

                <p className="mt-5 leading-relaxed text-slate-200/90">{description}</p>

                <div className="mt-6 flex items-center gap-3">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 
                                       bg-yellow-600 text-white hover:bg-yellow-500 
                                       transition shadow-[0_8px_30px_rgba(250,204,21,0.40)]"

                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            Live
                        </a>
                    )}
                    {repoUrl && (
                        <a
                            href={repoUrl}
                            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-slate-600/60 text-slate-200 hover:bg-slate-800/40 transition"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.82 1.31 3.51 1 .11-.78.42-1.31.77-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.25 2.85.12 3.15.77.84 1.24 1.92 1.24 3.23 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.23v3.31c0 .32.22.7.83.58A12 12 0 0012 .5z" />
                            </svg>
                            Repo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    madeWith: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string.isRequired,
    liveUrl: PropTypes.string,
    repoUrl: PropTypes.string,
    flip: PropTypes.bool,
    gallery: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(["image", "video"]).isRequired,
            src: PropTypes.string.isRequired,
            poster: PropTypes.string,
            alt: PropTypes.string,
            thumb: PropTypes.string,
        })
    ),
};
