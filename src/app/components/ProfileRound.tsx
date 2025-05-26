import Image from 'next/image';
import '../styles/background.css'

export default function ProfileRound() {
    return (
        <div className="flex justify-center items-center py-8 pr-24">
            <div className="w-[32rem] h-[32rem] rounded-full overflow-hidden ring-8 ring-red-50 ring-opacity-5 border border-gray-600 shadow flex items-center justify-center drop-shadow-4xl bg-red-50">
                <Image
                    src="/images/ProfilePicture.jpg"
                    alt="Profile"
                    width={576} // 26rem * 16 = 416px
                    height={576} // 36rem * 16 = 576px
                    className="w-full h-full object-cover object-top"
                    style={{ display: 'block', objectPosition: 'top' }}
                    priority
                />
            </div>
        </div>
    );
}