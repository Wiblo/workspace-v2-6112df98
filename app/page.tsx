import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <Image
        src="/uploads/image.png"
        alt="Under construction robot"
        width={400}
        height={400}
        priority
        className="mb-8 w-64 sm:w-80 md:w-96"
      />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Under Construction
      </h1>
      <p className="mt-4 text-lg text-gray-500">
        We&apos;re working hard to get things ready. Check back soon!
      </p>
    </div>
  )
}
