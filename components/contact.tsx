'use client';

import type React from 'react';

import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formState);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormState({
      name: '',
      email: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Mail className='h-5 w-5 text-primary' />,
      title: 'Email',
      value: 'jsparsh93@gmail.com',
      link: 'mailto:jsparsh93@gmail.com',
    },
    {
      icon: <Phone className='h-5 w-5 text-primary' />,
      title: 'Phone',
      value: '+91 9024219970',
      link: 'tel:+919024219970',
    },
    {
      icon: <Linkedin className='h-5 w-5 text-primary' />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/sparsh-jain',
    },
    {
      icon: <Github className='h-5 w-5 text-primary' />,
      title: 'GitHub',
      value: 'View my repositories',
      link: 'https://github.com/sparshj94',
    },
  ];

  return (
    <section id='contact' className='py-16 md:py-24'>
      <div className='container px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-2'>Get In Touch</h2>
          <div className='w-20 h-1 bg-primary rounded-full mx-auto mb-6'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <div ref={ref} className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors'
                  >
                    <div className='bg-primary/10 p-2 rounded-full'>
                      {item.icon}
                    </div>
                    <div>
                      <p className='text-sm font-medium'>{item.title}</p>
                      <p className='text-sm text-muted-foreground'>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='space-y-2'>
                    <label htmlFor='name' className='text-sm font-medium'>
                      Name
                    </label>
                    <Input
                      id='name'
                      name='name'
                      placeholder='Your name'
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='email' className='text-sm font-medium'>
                      Email
                    </label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='Your email'
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='message' className='text-sm font-medium'>
                      Message
                    </label>
                    <Textarea
                      id='message'
                      name='message'
                      placeholder='Your message'
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type='submit' className='w-full'>
                    <Send className='h-4 w-4 mr-2' />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
