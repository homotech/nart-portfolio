import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Image from "next/image";
const BrandLogos = () => {
  interface BrandLogo {
    id: string;
    [key: string]: any;
  }

  const [brandLogos, setBrandLogos] = useState<BrandLogo[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "logos"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBrandLogos(items);
      console.log(items);
    };
    fetchData();
  }, []);
  return brandLogos.map((logo) => (
    <div key={logo.id} className="w-full flex justify-center align-center">
      <Image src={logo.link} className="w-full" alt="Logos" />
    </div>
  ));
};
export default BrandLogos;
