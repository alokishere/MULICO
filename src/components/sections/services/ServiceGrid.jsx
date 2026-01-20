import React, { useEffect, useRef, useState } from "react";
import Card from "../../ui/Card";
import { serviceCategories, detailedServices } from "../../../data/services";
import { staggerContainer } from "../../../animations/gsap/stagger";
import {
  GraduationCap,
  Briefcase,
  Plane,
  Users,
  Building2,
  FileCheck,
  X,
  ArrowRight,
} from "lucide-react";
import GoToWhatsapp from "../../ui/GoToWhatsapp";

// Icon mapping based on service IDs
const iconMap = {
  student: GraduationCap,
  work: Briefcase,
  tourist: Plane,
  family: Users,
  business: Building2,
  pr: FileCheck,
};

const ServiceGrid = () => {
  const gridRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [modalDetails, setModalDetails] = useState(null);

  useEffect(() => {
    staggerContainer(gridRef.current, ".service-card", 0.2);
  }, []);

  // Update modal details when a service is selected
  useEffect(() => {
    if (selectedService) {
      // Find matching detailed service data
      const details = detailedServices.find(
        (d) => d.id === `${selectedService.id}-details`,
      );
      setModalDetails(details || null);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      setModalDetails(null);
      document.body.style.overflow = "unset"; // Restore scrolling
    }
  }, [selectedService]);

  const IconComponent = ({ id, className }) => {
    const Icon = iconMap[id] || Briefcase;
    return <Icon className={className} />;
  };

  return (
    <>
      <section className="py-12 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {serviceCategories.map((service) => (
              <Card
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="service-card p-8 hover:border-(--color-primary) group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg opacity-0 cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${service.bgColor} ${service.iconColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  <IconComponent id={service.id} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-(--text-main) mb-3 group-hover:text-(--color-primary) transition-colors">
                  {service.title}
                </h3>
                <p className="text-(--text-muted) text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="text-(--color-primary) text-sm font-medium flex items-center gap-1">
                  View Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          ></div>

          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-modal">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 hover:text-red-500 z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-1">
              {modalDetails?.image && (
                <div className="w-full h-48 sm:h-64 rounded-t-3xl overflow-hidden relative">
                  <img
                    src={modalDetails.image}
                    alt={modalDetails.title || selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <h2 className="absolute bottom-6 left-6 text-2xl sm:text-3xl font-bold text-white">
                    {modalDetails.title || selectedService.title}
                  </h2>
                </div>
              )}

              <div className="p-6 sm:p-8">
                {!modalDetails?.image && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    {selectedService.title}
                  </h2>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${selectedService.bgColor}`}>
                    <IconComponent
                      id={selectedService.id}
                      className={`w-6 h-6 ${selectedService.iconColor}`}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    {modalDetails?.tag || "Service Details"}
                  </span>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {modalDetails?.description || selectedService.desc}
                </p>

                {modalDetails?.features && (
                  <div className="bg-gray-50 rounded-2xl p-6  border border-gray-100">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                      Services Included
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {modalDetails.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <div className="mt-1 min-w-1.5 min-h-1.5 rounded-full bg-(--color-primary)"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 sm:p-8 border-t border-gray-100 flex justify-end bg-gray-50 rounded-b-3xl">
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 rounded-xl text-gray-600 font-medium hover:bg-gray-200 transition-colors mr-3"
              >
                Close
              </button>
              <GoToWhatsapp message="I am interested in your service">
                <button className="px-6 py-2.5 rounded-xl bg-(--color-primary) text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-(--color-primary)/20">
                  Get Consultation
                </button>
              </GoToWhatsapp>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceGrid;
