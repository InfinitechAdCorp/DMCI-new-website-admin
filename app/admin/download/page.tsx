import QRCodeComponent from './qr-code'

export default function DownloadPage() {
    return (
        <div className="h-screen flex justify-center p-4 mt-12 md:mt-0">

            <div className="max-w-md w-full">
                <QRCodeComponent />
            </div>
        </div>
    )
}

