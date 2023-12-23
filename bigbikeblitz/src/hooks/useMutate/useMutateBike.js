import { useMutation } from "@tanstack/react-query";
import {
  createBikeApi,
  editBikeApi,
  deleteBikeApi,
} from "../../api/bike";

function useMuatateBike() {
  const { mutateAsync: createBike, isPending: loadingCreateBike } =
    useMutation({
      mutationKey: ["createBike"],
      mutationFn: createBikeApi,
    });
  const { mutateAsync: editBike, isPending: loadingEditBike } =
    useMutation({
      mutationKey: ["editBike"],
      mutationFn: editBikeApi,
    });
  const { mutateAsync: deleteBike, isPending: loadingDeleteBike } =
    useMutation({
      mutationKey: ["deleteBike"],
      mutationFn: deleteBikeApi,
    });
  return {
    createBike,
    loadingCreateBike,
    editBike,
    loadingEditBike,
    deleteBike,
    loadingDeleteBike,
  };
}
export default useMuatateBike;