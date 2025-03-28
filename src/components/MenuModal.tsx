import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Twitter, MessageCircle, Instagram } from "lucide-react";
import { RiDiscordFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import useLockBodyScroll from "./useLockBodyScroll";
interface MenuModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const ANIMATION_DURATION = 0.7;
const MenuModal = ({ open, onOpenChange }: MenuModalProps) => {
  const [isVisible, setIsVisible] = useState(open);
  useLockBodyScroll(open);
  useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(
        () => setIsVisible(false),
        ANIMATION_DURATION * 1000
      );
      return () => clearTimeout(timeout);
    }
  }, [open]);

  const menuItems = [
    {
      title: "Blog",
      description: "Updates to me and my project development.",
      href: "/blog",
    },
    {
      title: "Portfolio",
      description: "Deeper meaning of who I am.",
      href: "/",
    },
    {
      title: "Buy iOS Certificates",
      description: "I sell signing certificates for $5, Learn more.",
      href: "https://buymeacoffee.com/loyahdev/extras",
    },
    {
      title: "Projects",
      description: "Find out what I've made.",
      href: "/projects",
    },
  ];
  return (
    <>
      {isVisible && (
        <div
          className={cn(
            "fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-lg transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          style={{
            transitionDuration: `${ANIMATION_DURATION}s`,
          }}
          onClick={() => onOpenChange(false)}
        >
          <nav className="fixed top-0 left-0 right-0 p-6 flex items-center justify-between z-[100]">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="/dj-logo.png"
                  alt="DJ Logo"
                  className="h-12 w-auto rounded-lg"
                />
              </a>
            </div>
          </nav>
          <div
            className={cn(
              "relative bg-[#051914] shadow-lg rounded-lg p-4 sm:max-w-[90%] lg:max-w-[800px] w-full mx-auto",
              "sm:rounded-lg md:rounded-lg lg:rounded-lg",
              open ? "animate-fade-in" : "animate-fade-out"
            )}
            onClick={(e) => e.stopPropagation()}
            style={{
              border: "none",
              outline: "none",
              marginLeft: "30px",
              marginRight: "30px",
              animationDuration: `${ANIMATION_DURATION}s`,
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {menuItems.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "nav-card bg-[#10231d] rounded-lg p-3 shadow-sm",
                    open
                      ? `opacity-0 animate-slide-in-up [animation-delay:${
                          (index + 1) * 0.1
                        }s]`
                      : `opacity-100 animate-slide-out-down [animation-delay:${
                          (menuItems.length - index) * 0.1
                        }s]`
                  )}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: `${ANIMATION_DURATION}s`,
                  }}
                >
                  <h3 className="text-lg sm:text-md font-semibold mb-2 phone-text">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 sm:text-sm phone-text">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
            {/* Social Links
            <div className="flex gap-6 items-center justify-center mt-8">
              <a 
                href="#" 
                className="bg-emerald-card p-3 rounded-full hover:bg-card-hover transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-emerald-card p-3 rounded-full hover:bg-card-hover transition-colors"
              >
                <Twitter className="w-5 h-5 text-white fill-white" />
              </a>
              <a 
                href="#" 
                className="bg-emerald-card p-3 rounded-full hover:bg-card-hover transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
            */}
            <style jsx="true">{`
              @keyframes fade-in {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
              @keyframes fade-out {
                from {
                  opacity: 1;
                }
                to {
                  opacity: 0;
                }
              }
              @keyframes slide-in-up {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              @keyframes slide-out-down {
                from {
                  opacity: 1;
                  transform: translateY(0);
                }
                to {
                  opacity: 0;
                  transform: translateY(20px);
                }
              }
              .animate-fade-in {
                animation: fade-in ${ANIMATION_DURATION}s ease-out forwards;
              }
              .animate-fade-out {
                animation: fade-out ${ANIMATION_DURATION}s ease-out forwards;
              }
              .animate-slide-in-up {
                animation: slide-in-up ${ANIMATION_DURATION}s ease-out forwards;
              }
              .animate-slide-out-down {
                animation: slide-out-down ${ANIMATION_DURATION}s ease-out
                  forwards;
              }
              .nav-card {
                animation-fill-mode: both;
              }
              @media (max-width: 600px) {
                .phone-text {
                  font-size: 0.9rem !important;
                }
                .phone-text p {
                  font-size: 0.75rem !important;
                }
              }
            `}</style>
          </div>
          {/* Footer for Social Links */}
          <div
            className={cn(
              "icon-footer fixed bottom-10 left-0 right-0 py-4 flex justify-center gap-6"
            )}
          >
            <a
              href="https://discordapp.com/users/717142444596265061"
              className="bg-[#091411] w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#322961] transition-colors border border-[#4b367c]"
            >
              <RiDiscordFill className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://x.com/loyahdev"
              className="bg-[#091411] w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#0C6092] transition-colors border border-blue-500"
            >
              <Twitter className="w-5 h-5 text-white fill-white" />
            </a>
            <a
              href="https://github.com/loyahdev"
              className="bg-[#091411] w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#8b004f] transition-colors border border-[#b80062]"
            >
              <FiGithub className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default MenuModal;
