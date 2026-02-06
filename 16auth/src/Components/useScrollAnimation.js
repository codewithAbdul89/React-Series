import { useEffect, useRef } from "react";

export function useScrollAnimation({ selector = ".animate-on-scroll", threshold = 0.1, } = {}) {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observerRef.current.unobserve(entry.target); // animate once
                }
                
                // animate once

                // else {
                //     entry.target.classList.remove("is-visible");
                // }
            });
        },
            { threshold }
        );

        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => observerRef.current.observe(el));

        return () => {
            observerRef.current?.disconnect();
        };
    }, [selector, threshold]);
}
