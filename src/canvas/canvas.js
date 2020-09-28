export function initialize(canvas) {
    return new Promise(resolve => {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;

        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        ctx.bounds = rect;

        window.devicePixelRatio = window.devicePixelRatio || dpr;

        resolve(ctx);
    });
}


