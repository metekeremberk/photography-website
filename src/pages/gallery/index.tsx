import Link from "next/link";

export default function Gallery() {
	return (
		<>
			<div className="font-sans w-full h-screen bg-paletteQuaternary">
				{/* Navbar */}
				<div className="sticky top-0 left-0 w-full h-32 bg-palettePrimary flex flex-row justify-between items-center px-16 text-paletteQuaternary">
					<Link href="/" className="font-semibold text-4xl py-5">
						PhotoBerk
					</Link>
					<div className="flex flex-row gap-8 text-2xl font-normal">
						<Link href="/sign-in" className="p-5">
							Sign in
						</Link>
						<Link href="/sign-up" className="bg-paletteBlue py-5 px-7 rounded-[30px]">
							Sign up
						</Link>
					</div>
				</div>
				{/* Body */}
				<div className="h-min bg-paletteQuaternary flex flex-col">
					{/* Filters */}
					<div className="flex flex-col px-32">
						<div className="flex flex-row overflow-auto">
							<div className="m-10 flex flex-row gap-5 items-center hover:cursor-pointer">
								<div className="aspect-square w-16 bg-paletteTertiary"></div>
								<div>Romania</div>
							</div>
							<div className="m-10 flex flex-row gap-5 items-center hover:cursor-pointer">
								<div className="aspect-square w-16 bg-paletteTertiary"></div>
								<div>Germany</div>
							</div>
							<div className="m-10 flex flex-row gap-5 items-center hover:cursor-pointer">
								<div className="aspect-square w-16 bg-paletteTertiary"></div>
								<div>Switzerland</div>
							</div>
							<div className="m-10 flex flex-row gap-5 items-center hover:cursor-pointer">
								<div className="aspect-square w-16 bg-paletteTertiary"></div>
								<div>Turkey</div>
							</div>
						</div>
						<div className="bg-palettePrimary h-1 w-full rounded-full mx-auto"></div>
					</div>
					{/* Photos */}
					<div className="my-16 mx-24 flex flex-row gap-5">
						<div className="flex flex-col gap-5 basis-1/3">
							<div className="bg-paletteSecondary aspect-video"></div>
							<div className="bg-paletteSecondary aspect-square"></div>
							<div className="bg-paletteSecondary aspect-video"></div>
							<div className="bg-paletteSecondary aspect-square"></div>
						</div>
						<div className="flex flex-col gap-5 basis-1/3">
							<div className="bg-paletteSecondary aspect-square"></div>
							<div className="bg-paletteSecondary aspect-video"></div>
							<div className="bg-paletteSecondary aspect-square"></div>
							<div className="bg-paletteSecondary aspect-video"></div>
						</div>
						<div className="flex flex-col gap-5 basis-1/3">
							<div className="bg-paletteSecondary aspect-video"></div>
							<div className="bg-paletteSecondary aspect-square"></div>
							<div className="bg-paletteSecondary aspect-video"></div>
							<div className="bg-paletteSecondary aspect-square"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
