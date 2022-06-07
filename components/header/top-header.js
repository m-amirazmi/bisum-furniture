import Image from 'next/image';
import Link from 'next/link';

export default function TopHeader() {
	return (
		<div className="header__topheader border-bottom text-primary">
			<div className="container py-3 d-flex justify-content-between align-items-center">
				<p className="mb-0">Call: +1 078 2376</p>
				<div className="d-flex align-items-center gap-3">
					{/* SIGN IN */}
					<div className="d-flex align-items-center gap-2">
						<div className="img-container">
							<Image src="/images/icons/user.svg" alt="Top Header User Icon" width={16} height={16} />
						</div>
						<Link href="/signin">
							<a>Sign In</a>
						</Link>
					</div>
					<span style={{ color: 'rgba(0, 35, 77, 0.4)', fontSize: '10px' }}>|</span>

					{/* CURRENCY */}
					<div className="d-flex align-items-center">
						<div className="img-container"></div>
						<p className="header__topheader__currency">USD $</p>
					</div>
				</div>
			</div>
		</div>
	);
}
