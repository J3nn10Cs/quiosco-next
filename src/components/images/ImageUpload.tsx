"use client";
import { getImagePath } from '@/helpers/currency';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useState } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

export default function ImageUpload({image} : {image : string | undefined}) {

  const [imageUpload,setImageUpload] = useState('')

  return (
    <CldUploadWidget
      onSuccess={(result , {widget}) => {
        if(result.event === 'success'){
          //cerrar el widget de cloudinary
          widget.close()
          //@ts-ignore
          setImageUpload(result.info?.secure_url)
        }
      }}
      uploadPreset="vsssrgkd"
      options={{
        maxFiles : 1
      }}
    >
      {({open}) => (
        <>
          <div className='space-y-2'>
            <label className='text-slate-800'>Imagen Producto</label>
            <div
              className='flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg bg-slate-100 hover:bg-slate-200 cursor-pointer relative'
              onClick={() => open()}
            >
              <TbPhotoPlus className='w-10 h-10 ' />
              <p className='text-lg font-semibold'>Agregar Imagen</p>
              {imageUpload && (
                <>
                  <div className='absolute inset-0 w-full h-full'>
                    <Image
                      fill
                      style={{ objectFit : 'contain' }}
                      src={imageUpload}
                      alt='Imagen Producto'
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* si hay una imagen y no se esta actualizando */}
          {image && !imageUpload && (
            <>
              <div className='space-y-2'>
                <label htmlFor="">Imagen Actual</label>
                <div className='relative w-64 h-64'>
                  <Image
                    fill
                    style={{ objectFit : 'contain' }}
                    src={getImagePath(image)}
                    alt='Imagen Producto'
                  />
                </div>
              </div>
            </>
          )}

          <input
            type='hidden'
            name='image'
            defaultValue={imageUpload ? imageUpload : image}
          />
        </>
      )}
    </CldUploadWidget>
  );
}