import { useState } from "react";
import { CreateType } from "../components";

export const useCreateModal = (): {
  handleModalClose: () => void;
  handleCreate: (createType: CreateType | undefined) => void;
  createType?: CreateType;
} => {
  const [createType, setCreateType] = useState<CreateType | undefined>();

  const handleModalClose = () => {
    setCreateType(undefined);
  };

  const handleCreate = (createType: CreateType | undefined) => {
    setCreateType(createType);
  };

  return {
    handleModalClose,
    handleCreate,
    createType,
  };
};
