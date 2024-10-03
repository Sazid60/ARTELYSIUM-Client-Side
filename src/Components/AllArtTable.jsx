
import { Link } from "react-router-dom";

const AllArtTable = ({ loadedCards }) => {

  console.log(loadedCards)

  return (

    <div className=" p-2 sm:p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-[7px] md:text-[10px] lg:text-sm">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead className="bg-[#807d7d] text-white">
            <tr className="text-left">
              <th className="p-1 md::p-2 lg:p-3  max-w-[80px] lg:max-w-full ">Name</th>
              <th className="p-1 md::p-2 lg:p-3  max-w-[60px] lg:max-w-full">Category</th>
              <th className="p-1 md::p-2 lg:p-3 ">Price</th>
              <th className="p-1 md::p-2 lg:p-3 ">Creator</th>
              <th className="p-1 md::p-2 lg:p-3 ">Details</th>
            </tr>
          </thead>
          {
            loadedCards.map(singleCard => <tbody key={singleCard._id}>
              <tr className="border-b border-opacity-20 ">
                <td className="p-1 lg:p-3  max-w-[80px] lg:max-w-full">
                  <p>{singleCard.item_name}</p>
                </td>
                <td className="p-1 lg:p-3  max-w-[60px] lg:max-w-full">
                  <p>{singleCard.subcategory_name}</p>
                </td>
                <td className="p-1 lg:p-3  max-w-[60px] lg:max-w-full">
                  <p>{singleCard.price} BDT</p>
                </td>
                <td className="p-1 lg:p-3  max-w-[60px] lg:max-w-full">
                  <p>{singleCard.user_name}</p>
                </td>
                <td className="py-2 lg:p-3  max-w-[60px] lg:max-w-full">
                  <span className="">
                    <Link to={`/craftArts/${singleCard._id}`}><span className="text-[7px] md:text-[10px] lg:text-sm x-2 py-1 xl:px-4 xl:py-1 bg-[#CFAE7A] text-white shadow-md hover:bg-yellow-700 transition">Details</span></Link>
                  </span>
                </td>
              </tr>
            </tbody>).reverse()
          }
        </table>
      </div>
    </div>
  );
};

export default AllArtTable;