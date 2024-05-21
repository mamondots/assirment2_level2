import { Product } from './product.interface';
import { productModel } from './product.model';

const createProductData = async (product: Product) => {
  const result = await productModel.create(product);
  return result;
};

const getAllProducts = async (searchTerm?: string) => {
  if (searchTerm) {
    const result = await productModel.find({
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ],
    });
    return result;
  } else {
    const result = await productModel.find();
    return result;
  }
};

const getSingleProduct = async (id: string) => {
  const result = await productModel.findById(id);
  return result;
};

const updateSingleProduct = async (
  id: string,
  updatedProduct: Partial<Product>,
) => {
  const result = await productModel.findByIdAndUpdate(id, updatedProduct, {
    new: true,
  });
  return result;
};

const deleteSingleProduct = async (id: string) => {
  const result = await productModel.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProductData,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
