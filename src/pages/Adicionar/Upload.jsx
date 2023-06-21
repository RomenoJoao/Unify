import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import api from "../../api/endpoints";
import "./upload.css";

export default function Upload() {
                                   const fileUploadMutation = useMutation(
                                     (files) => api.uploadFiles(files)
                                   );
                                   const dataMutation = useMutation((content) =>
                                     api.createContent(content)
                                   );
                                   const navigate = useNavigate();

                                   const {
                                     control,
                                     handleSubmit,
                                     register,
                                   } = useForm();

                                   async function submit(data) {
                                     let isUndefined = false;
                                     Object.keys(data).forEach((key) => {
                                       if (data[key] === undefined) {
                                         isUndefined = true;
                                         return;
                                       }
                                     });
                                     if (isUndefined) {
                                       toast.error("Preencha todos os campos");
                                       return;
                                     }

                                     const { file, cp1, cp2 } = data;
                                     const {
                                       filePath,
                                     } = await fileUploadMutation.mutateAsync([
                                       file,
                                       cp1,
                                       cp2,
                                     ]);
                                     const [
                                       fileFilename,
                                       capa1Filename,
                                       capa2Filename,
                                     ] = filePath.map(
                                       (fileResponse) => fileResponse.filename
                                     );
                                     const content = {
                                       title: data.titulo,
                                       path: fileFilename,
                                       coverPath: capa1Filename,
                                     };
                                     await dataMutation.mutateAsync(content);
                                     toast.success(
                                       "Conteúdo criado com sucesso"
                                     );
                                     navigate("/");
                                   }

                                   return (
                                     <div className="allUp">
                                       <form
                                         onSubmit={handleSubmit(submit)}
                                         className="allUp"
                                       >
                                         <div className="cima">
                                           <p>Titulo:</p>
                                           <input
                                             {...register("titulo")}
                                             className="tituloI"
                                             type="text"
                                           />
                                         </div>
                                         <div className="fics">
                                           <p>Ficheiro</p>
                                           <Controller
                                             control={control}
                                             name="file"
                                             render={({
                                               field: { onChange },
                                             }) => (
                                               <input
                                                 onChange={(event) =>
                                                   onChange(
                                                     event.target.files.item(0)
                                                   )
                                                 }
                                                 className="fic"
                                                 name="files"
                                                 type="file"
                                               />
                                             )}
                                           />
                                           <p>Capa</p>
                                           <Controller
                                             control={control}
                                             name="cp1"
                                             render={({
                                               field: { onChange },
                                             }) => (
                                               <input
                                                 onChange={(event) =>
                                                   onChange(
                                                     event.target.files.item(0)
                                                   )
                                                 }
                                                 className="cp"
                                                 name="files"
                                                 type="file"
                                               />
                                             )}
                                           />
                                           <Controller
                                             control={control}
                                             name="cp2"
                                             render={({
                                               field: { onChange },
                                             }) => (
                                               <input
                                                 onChange={(event) =>
                                                   onChange(
                                                     event.target.files.item(0)
                                                   )
                                                 }
                                                 className="cp"
                                                 name="files"
                                                 type="file"
                                               />
                                             )}
                                           />
                                         </div>
                                         <button className="btnC">
                                           Carregar
                                         </button>
                                       </form>
                                     </div>
                                   );
                                 }
