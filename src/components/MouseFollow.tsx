import { component$, useVisibleTask$, useSignal, $ } from '@builder.io/qwik';

export const MouseFollow = component$(() => {
  const mouseX = useSignal(0);
  const mouseY = useSignal(0);
  const isTouch = useSignal(false);

  useVisibleTask$(() => {
    const handlePointerMove = (e: PointerEvent) => {
      mouseX.value = e.clientX;
      mouseY.value = e.clientY;
      isTouch.value = e.pointerType === 'touch';
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  });

  return (
    <div
      class="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${mouseX.value}px ${mouseY.value}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    />
  );
});