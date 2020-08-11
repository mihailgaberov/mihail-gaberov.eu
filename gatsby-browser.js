import './src/styles/global.css';

export const onClientEntry = async () => {
    if (typeof IntersectionObserver === `undefined`) {
        await import(`intersection-observer`);
    }
}
