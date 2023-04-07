import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
	return (
		<>
			<div className="font-sans w-full h-screen bg-paletteQuaternary">
				<div className="w-full h-32 bg-palettePrimary flex flex-row justify-between items-center px-16 text-paletteQuaternary">
					<div className="font-semibold text-4xl">PhotoBerk</div>
					<div className="flex flex-row gap-8 text-2xl font-normal">
						<Link href="/gallery" className="p-5">
							Gallery
						</Link>
						<Link href="/sign-in" className="p-5">
							Sign in
						</Link>
						<Link href="/sign-up" className="bg-paletteBlue py-5 px-7 rounded-[30px]">
							Sign up
						</Link>
					</div>
				</div>
				<div className="flex justify-center items-center h-[calc(100vh-128px)] ">
					<div className="aspect-[2] w-2/3 min-w-min bg-paletteSecondary flex flex-row rounded-lg">
						<div className="basis-1/2 relative">
							<Image
								src="next.svg"
								alt=""
								width={250}
								height={250}
								className="bg-paletteGreen w-80 h-80 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"
							></Image>
							<Image
								src="vercel.svg"
								alt=""
								width={250}
								height={250}
								className="bg-paletteGreen w-72 h-72 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-2/3 z-0 opacity-50"
							></Image>
						</div>
						<div className="basis-1/2 flex flex-col gap-8 justify-center text-paletteQuaternary pr-12">
							<div className="text-4xl font-semibold">Welcome!</div>
							<div className="text-xl font-normal">
								Welcome to my online photography gallery! I have captured the beauty and diversity of the world through my camera lens. My gallery
								showcases a collection of photographs from the places I have travelled to.
							</div>
							<Link href="/gallery" className="bg-palettePrimary text-xl py-3.5 px-6 max-w-min rounded-3xl">
								Gallery
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
