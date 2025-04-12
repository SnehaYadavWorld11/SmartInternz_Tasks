import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Product Detail Page</h2>
      <p>Showing details for product ID: {id}</p>
    </div>
  );
};

export default ProductDetail;
