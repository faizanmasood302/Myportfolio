'use client';

export default function MeshBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent1 rounded-full mix-blend-screen filter blur-[120px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-accent2 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-accent3 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
    </div>
  );
}
