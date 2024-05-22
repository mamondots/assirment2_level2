import { Request, Response } from 'express';
import { productService } from './product.service';
import ProductValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const zodparsedData = ProductValidationSchema.parse(productData);

    const result = await productService.createProductData(zodparsedData);
    res.status(200).json({
      success: true,
      message: 'product is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something wrong here',
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  const searchTerm: string = req.query.searchTerm as string;
  try {
    const result = await productService.getAllProducts(searchTerm);
    const message = searchTerm
      ? `Products matching search term '${searchTerm}' fetched successfully!`
      : 'successfully getting all products';
    res.status(200).json({
      success: true,
      message: message,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something wrong here',
      error: error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    const result = await productService.getSingleProduct(productID);
    res.status(200).json({
      success: true,
      message: 'succesfully getting single product',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'there is no products in this id',
      error: error,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    const updatedProduct = req.body;
    const result = await productService.updateSingleProduct(
      productID,
      updatedProduct,
    );
    res.status(200).json({
      success: true,
      message: 'succesfully updated single product',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something wrong here',
      error: error,
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    const result = await productService.deleteSingleProduct(productID);

    res.status(200).json({
      success: true,
      message: 'succesfully deleted  product',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something wrong here',
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
