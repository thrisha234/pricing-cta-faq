"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for individuals and small projects",
    features: ["Up to 5 projects", "10GB storage", "Basic support", "Standard templates", "Mobile app access"],
    popular: false,
    cta: "Start Free Trial",
    color: "bg-indigo-600",
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Priority support",
      "Premium templates",
      "Advanced analytics",
      "Team collaboration",
      "Custom integrations",
    ],
    popular: true,
    cta: "Get Started",
    color: "bg-emerald-600",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large organizations with advanced needs",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom development",
      "Advanced security",
      "SLA guarantee",
      "On-premise deployment",
    ],
    popular: false,
    cta: "Contact Sales",
    color: "bg-rose-600",
  },
]

const faqData = [
  {
    question: "What's included in the free trial?",
    answer:
      "The free trial includes full access to all Starter plan features for 14 days. No credit card required to start your trial.",
  },
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise customers.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee.",
  },
  {
    question: "Do you offer annual discounts?",
    answer:
      "Yes! Save 20% when you choose annual billing on any plan. The discount is automatically applied at checkout.",
  },
  {
    question: "What happens if I exceed my storage limit?",
    answer:
      "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional storage as needed.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied, contact our support team for a full refund.",
  },
]

export default function PricingCTASection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Choose Your Plan</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-emerald-400 shadow-xl scale-105" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-100 text-emerald-700">Most Popular</Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-800">{plan.price}</span>
                  <span className="text-base font-medium text-gray-500">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full text-white ${plan.color} hover:opacity-90 transition`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Frequently Asked Questions</h3>
            <p className="text-muted-foreground">Everything you need to know about our pricing and plans.</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="border">
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-medium text-left">{faq.question}</CardTitle>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                {openFAQ === index && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 p-8 bg-muted rounded-lg">
          <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">Contact Support</Button>
            <Button>Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
