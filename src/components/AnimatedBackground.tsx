export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-blob bg-blob-1 absolute size-[32rem] rounded-full bg-accent/30 blur-3xl" />
      <div className="bg-blob bg-blob-2 absolute size-[26rem] rounded-full bg-purple-800/25 blur-3xl" />
      <div className="bg-blob bg-blob-3 absolute size-[30rem] rounded-full bg-violet-600/20 blur-3xl" />
    </div>
  );
}
