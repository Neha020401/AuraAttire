import React from "react";
import BrandList from "../../objects/BrandList";

const Brand = () => {
   // const [brand, setBrand] = useState();

    const brandList = BrandList.map((brands) => {
        return (
            <div key={brands.BrandId} className="brandCard ">
                <img src={brands.BrandImg} alt="Brand" className="brandImg " />
                <p className="brandName">{brands.BrandName}</p>
            </div>
        );
    });

    return (
        <div className=" brandContainer ">
            {brandList}
        </div>
    );
};

export default Brand;
