import React, { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ className, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "space-y-6 rounded-xl border border-border bg-secondary p-8 shadow-sm",
        className
      )}
    >
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-semibold">
          Tên
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Tên của bạn"
          required
          className="bg-background focus-visible:ring-primary"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-semibold">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email của bạn"
          required
          className="bg-background focus-visible:ring-primary"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-semibold">
          Tin Nhắn
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tin nhắn của bạn"
          required
          rows={5}
          className="resize-none bg-background focus-visible:ring-primary"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full font-semibold hover:opacity-90"
        size="lg"
      >
        Gửi
      </Button>
    </form>
  );
};

export default ContactForm;
