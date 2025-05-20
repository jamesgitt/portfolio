import Image from 'next/image';

export default function ProfileRound() {
    return (
        <div className="justify-center items-center py-8">
            <div className="w-[38rem] h-[48rem] rounded-full overflow-hidden border-4 border-black shadow flex items-center justify-center drop-shadow-xl">
                <Image
                    src="/images/ProfilePicture.jpg"
                    alt="Profile"
                    width={608} // 38rem * 16 = 608px
                    height={768} // 48rem * 16 = 768px
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                />
            </div>
        </div>
    );
}