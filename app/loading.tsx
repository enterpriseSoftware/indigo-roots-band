import Image from 'next/image';
import loader from '@/assets/loader.gif';

const LoadingPage = () => {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Image 
            src={loader} 
            height={150} 
            alt="Loading..." 
            width={150}
            style={{ width: 'auto' }}
          />
          <h1 className="text-2xl font-bold mt-4">Loading...</h1>
        </div>
      </div>
    );
}
 
export default LoadingPage;