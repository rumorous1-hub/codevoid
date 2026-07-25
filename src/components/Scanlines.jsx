export default function Scanlines() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[90]">
      <div className="absolute inset-0 crt-scanlines opacity-60" />
      <div className="absolute inset-0 crt-vignette" />
    </div>
  );
}