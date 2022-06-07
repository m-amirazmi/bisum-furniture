import Image from 'next/image';
import Link from 'next/link';

export default function TopNavbar() {
	return (
		<div className="header__topnavbar text-primary py-5">
			<div className="container">
				<div className="row align-items-center">
					{/* LOGO */}
					<div className="col-3">
						<div className="img-container">
							<Image src="/images/logo.svg" alt="Logo" width={122} height={32} />
						</div>
					</div>

					{/* NAV LINKS */}
					<div className="col-6">
						<div className="d-flex align-items-center justify-content-center">
							<Link href="/">
								<a className="text__sub-sm px-5">Home</a>
							</Link>
							<Link href="/">
								<a className="text__sub-sm px-5">Categories</a>
							</Link>
							<Link href="/">
								<a className="text__sub-sm px-5">Shop</a>
							</Link>
							<Link href="/">
								<a className="text__sub-sm px-5">Blog</a>
							</Link>
							<Link href="/">
								<a className="text__sub-sm px-5">Contact</a>
							</Link>
						</div>
					</div>

					{/* ICONS */}
					<div className="col-3">
						<div className="d-flex align-items-center justify-content-end gap-4">
							<div className="img-container">
								<Image src="/images/icons/search-solid.svg" alt="Search Icon" width={32} height={32} />
							</div>
							<div className="img-container">
								<Image src="/images/icons/heart.svg" alt="Search Icon" width={32} height={32} />
							</div>
							<div className="img-container">
								<Image src="/images/icons/shopping-bag-solid.svg" alt="Search Icon" width={32} height={32} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
