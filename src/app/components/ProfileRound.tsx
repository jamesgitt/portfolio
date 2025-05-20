export default function ProfileRound() {
    return (
        <div className="justify-center items-center py-8">
            <div className="w-[38rem] h-[48rem] rounded-full overflow-hidden border-4 border-black shadow flex items-center justify-center">
                <img
                    src="/images/ProfilePicture.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                />
            </div>
        </div>
    );
}