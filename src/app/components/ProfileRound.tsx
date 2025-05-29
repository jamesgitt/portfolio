import Image from 'next/image';
import '../styles/background.css'

export default function ProfileRound() {
    return (
        <div className="profileRoundCard">
            <Image
                src="/images/ProfilePicture.jpg"
                alt="Profile"
                width={416} // 26rem * 16 = 416px
                height={416} // 36rem * 16 = 576px
                className="w-full h-full object-cover object-top"
                style={{ display: 'block', objectPosition: 'top' }}
                priority
            />
        </div>
    );
}