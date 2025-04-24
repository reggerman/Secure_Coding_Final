import { Request, Response, NextFunction } from "express";

import { successResponse } from "../models/responseModel";

export const getLoan = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(200).json(successResponse("There is nothing here","Hello World!"))
    }
    catch (error) {
        next(error)
    }
};

export const reviewLoan = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(200).json(successResponse("The Loan is not good","We can make money"))
    }
    catch (error) {
        next(error)
    }
};

export const createLoan = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(200).json(successResponse("Loan Createed","Thanks for giving us all your business for money needs!"))
    }
    catch (error) {
        next(error)
    }
};

export const approveLoan = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(200).json(successResponse("Loan is not approved","Too Risky of an investment"))
    }
    catch (error) {
        next(error)
    }
};

