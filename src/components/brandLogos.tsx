import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
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
    <div key={logo.id} className="w-full">
      <img src={logo.link} className="w-full" />
    </div>
  ));
};
export default BrandLogos;
