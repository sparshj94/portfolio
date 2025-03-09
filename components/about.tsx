'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id='about' className='py-16 md:py-24 bg-muted/30'>
      <div className='container px-4'>
        <div className='flex flex-col md:flex-row gap-12 items-center'>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className='md:w-1/2'
          >
            <div className='relative w-full aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl'>
              <Image
                src='/abphoto.jpg?height=500&width=500'
                alt='Sparsh Jain'
                width={500}
                height={500}
                className='object-cover'
                priority
              />
              <div className='absolute inset-0 bg-primary/10 rounded-2xl'></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='md:w-1/2 space-y-6'
          >
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-2'>About Me</h2>
              <div className='w-20 h-1 bg-primary rounded-full mb-6'></div>
            </div>

            <p className='text-muted-foreground'>
              I'm a passionate Full-Stack Engineer with expertise in both
              frontend and backend development. My journey in software
              engineering has been driven by a desire to create applications
              that not only function flawlessly but also provide exceptional
              user experiences.
            </p>

            <p className='text-muted-foreground'>
              With a strong foundation in frontend technologies like React and
              React Native, as well as backend frameworks such as Spring Boot
              and the MERN stack, I specialize in building high-performance,
              responsive applications that solve real-world problems.
            </p>

            <p className='text-muted-foreground'>
              Working remotely has allowed me to collaborate directly with
              clients across different industries, translating their
              requirements into intuitive designs and functional solutions. I'm
              committed to creating modular, scalable components with a focus on
              security and efficiency.
            </p>

            <p className='text-muted-foreground'>
              My approach combines technical expertise with a deep understanding
              of user needs, resulting in applications that not only meet but
              exceed expectations in terms of performance, usability, and
              business value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
