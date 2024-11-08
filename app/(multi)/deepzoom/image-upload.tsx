"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { ChangeEvent, useState } from "react";
import { BsPlus } from "react-icons/bs";


import { toast } from "@/hooks/use-toast"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCreateQueryString } from "@/hooks/use-create-query-string"
import { useRouter } from "next/navigation"
const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  image: z
    .array(z.instanceof(File))
    .refine(
      (files) => files.every((file) => file.size <= MAX_FILE_SIZE && ACCEPTED_IMAGE_TYPES.includes(file.type)),
      {
        message: "Item photo: Only .jpeg, .jpg, .png files of 2MB or less are accepted",
      }
    ),
})

export function ImageUpload() {
  const queryString = useCreateQueryString()
  const router = useRouter()
  const [previews, setPreviews] = useState<string[]>([]);

  // 파일 선택 시 미리보기 URL을 생성
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviews([URL.createObjectURL(file)]); // 선택한 파일의 URL을 state에 저장
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: [],
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      // FormData를 사용하여 데이터를 전송
      const formData = new FormData();
      formData.append('file', values.image[0]);

      const response = await fetch(`/api/tiles`, {
        method: 'POST',
        body: formData, // multipart/form-data 전송
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      router.push(queryString('deepzoom', JSON.stringify(result.res)))
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      })
    } catch (error) {
      console.error('Error submitting form:', error);
    }

  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="container space-y-8">
          <div className="grid md:grid-cols-2 w-full">
            <div className='flex flex-col w-full'>
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem
                    className=" my-4 mx-2 p-2 rounded-[32px]"
                  >
                    <FormControl>
                      <div>
                        <input
                          type="file"
                          id="fileInput"
                          accept="image/*"
                          multiple
                          onBlur={field.onBlur}
                          name={field.name}
                          ref={field.ref}
                          onChange={(e) => {
                            field.onChange([...Array.from(e.target.files ?? [])])
                            handleFileChange(e);
                          }}
                        />
                        <div className=''>2MB 미안의 .jpg 파일 사용을 권장합니다.</div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type='submit'>제출</Button>
        </form>
      </Form >

    </>
  )
}


