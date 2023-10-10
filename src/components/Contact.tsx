/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { motion } from 'framer-motion';
import { aboutVariants } from '../framer_variants/variants';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import ErrorMessage from './ErrorMessage';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const contactFormSchema = z
  .object({
    user_name: z
      .string()
      .min(1, 'full name must at least be 1 character long  '),
    user_email: z.string().email('please provide a valid email'),
    message: z.string().min(1, 'please provide a message'),
  })
  .required();

type ContactFormType = z.infer<typeof contactFormSchema>;
const Contact = () => {
  const form = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  });

  async function sendEmailMessage() {
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID as string,
        import.meta.env.VITE_TEMPLATE_ID as string,
        form.current!,
        import.meta.env.VITE_PUBLIC_KEY as string
      );
      if (result.status === 200) {
        toast.success('Your message was sent successfully !', {
          theme: 'dark',
        });
      }
    } catch (error) {
      console.log(error);
    }

    reset();
  }
  return (
    <motion.section
      variants={aboutVariants}
      initial="hidden"
      animate="visible"
      exit="exiting"
      transition={{
        duration: 0.6,
      }}
      className="h-[calc(100vh-3.5rem)]   text-white   max-w-screen-xl mx-auto"
    >
      <div className="p-8 ">
        <h1 className="text-left text-4xl md:text-6xl  md:col-span-2 capitalize mb-8 border-b-2 pb-4 font-bold">
          contact
        </h1>
        <p className="text-2xl">
          Feel free to use either the following form or the social links to
          contact me.
        </p>
        <form
          ref={form}
          className="py-4 flex flex-col  mt-8 p-2 bg-[#222]/50  shadow-lg md:p-4 rounded-md gap-y-8 max-w-[800px] mx-auto"
          onSubmit={handleSubmit(sendEmailMessage)}
        >
          <div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="user_name" className="uppercase">
                full name
              </label>
              <input
                type="text"
                id="user_name"
                {...register('user_name')}
                className="p-2 border-2 bg-transparent text-white outline-none focus:border-darkOrange text-xl"
              />
            </div>
            <ErrorMessage errorObject={errors} target="user_name" />
          </div>

          <div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="user_email" className="uppercase">
                email
              </label>
              <input
                type="text"
                id="user_email"
                {...register('user_email')}
                className="p-2 border-2 bg-transparent text-white outline-none focus:border-darkOrange text-xl"
              />
            </div>
            <ErrorMessage errorObject={errors} target="user_email" />
          </div>

          <div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="message" className="uppercase">
                message
              </label>
              <textarea
                id="message"
                {...register('message')}
                className="p-2 border-2 bg-transparent text-white outline-none focus:border-darkOrange text-xl"
              />
            </div>
            <ErrorMessage errorObject={errors} target="message" />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-x-4   border-2 bg-transparent uppercase px-8 py-4 place-self-center hover:bg-white hover:text-[#222] transition-all duration-200 font-semibold group disabled:bg-gray-500"
            disabled={isSubmitting}
          >
            <span
              className={`${
                isSubmitting ? 'animate-spin' : ''
              } w-6 h-6 border-2 border-b-transparent inline-block rounded-full  group-hover:border-[#222] group-hover:border-b-transparent`}
            ></span>
            submit
          </button>
        </form>
      </div>
    </motion.section>
  );
};
export default Contact;
