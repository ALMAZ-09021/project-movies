import {createPortal} from "react-dom";

export function Modal({children, onClose}) {
    return createPortal(
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <div className="relative w-[90%] max-w-xl
            bg-neutral-900 text-white p-6 rounded rounded-2xl shadow-lg animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white text-xl
                    hover:text-red-600 transition"
                    aria-label="Close modal"
                >
                    Close
                </button>
                {children}
            </div>
        </div>,
    document.body
    )
}