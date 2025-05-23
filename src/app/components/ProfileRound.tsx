import Image from 'next/image';

export default function ProfileRound() {
    return (
        <div className="justify-center items-center py-8">
            <div className="w-[40rem] h-[28rem] rounded-full overflow-hidden border-4 border-black shadow flex items-center justify-center drop-shadow-xl">
                <Image
                    src="/images/ProfilePicture.jpg"
                    alt="Profile"
                    width={640} // 40rem * 16 = 640px
                    height={448} // 28rem * 16 = 448px
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                />
            </div>
        </div>
    );
}