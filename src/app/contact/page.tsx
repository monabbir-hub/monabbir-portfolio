"use client";

import React, { useRef, useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import emailjs from "@emailjs/browser";

import Modal from "./Modal";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { motion } from "framer-motion";

import { info } from "@/constants";

const Page = () => {
  interface FormState {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSelectChange = (value: string) => {
    setForm({
      ...form,
      service: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0rkljon",
        "template_wp3aeld",
        {
          from_name: `${form.firstname} ${form.lastname}`,
          to_name: "Monabbir Bhuiyan",
          from_email: form.email,
          to_email: "monabbir.179@gmail.com",
          message: form.message,
          phone: form.phone,
          service: form.service,
        },
        "EyhKhmVaaXgsng4ys"
      )
      .then(
        () => {
          setLoading(false);
          setModalMessage(
            "Thank you. We will get back to you as soon as possible."
          );
          setModalVisible(true);

          setForm({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setModalMessage("Ahh, something went wrong. Please try again.");
          setModalVisible(true);
        }
      );
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#191919] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">Let's Create something together</p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  placeholder="Firstname"
                />
                <Input
                  type="text"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                <Input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                />
              </div>

              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                    <SelectItem value="Graphic Design">
                      Graphic Design
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here."
              />

              <Button size="md" className="max-w-40" type="submit">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#191919] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        isVisible={modalVisible}
        onClose={closeModal}
        title="Notification"
        message={modalMessage}
      />
    </motion.section>
  );
};

export default Page;
