import AnnouncementBar from './announcement-bar';
import TopHeader from './top-header';
import TopNavbar from './top-navbar';

export default function Header() {
	return (
		<div className="header">
			<AnnouncementBar />
			<TopHeader />
			<TopNavbar />
		</div>
	);
}
