"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Shield, Lock, FileText, Link } from "lucide-react";

export function BioLinks() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);
  const applink = "https://www.vercel.com";
  const links = [
    {
      icon: Link,
      label: "تامين السيارات ",
      href: applink,
      color: "hover:bg-primary/20",
    },
    {
      icon: Link,
      label: "تأمين شامل",
      href: applink,
      color: "hover:bg-primary/20",
    },
    {
      icon: Link,
      label: "تامين ضد الغير",
      href: applink,
      color: "hover:bg-primary/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4" dir="rtl">
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
            <img src="/next.svg" width={80} height={80} alt="logo" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            تأمين السيارات
          </h1>
          <p className="text-muted-foreground text-lg">
            قارن الاسعار واكتشف اخر العروض الحصرية
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-3 mb-8">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className={`block w-full bg-card border border-border rounded-lg p-4 transition-all ${link.color} hover:border-primary group`}
              >
                <div className="flex items-center justify-center gap-3">
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-card-foreground font-medium">
                    {link.label}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <button
            onClick={() => setPrivacyOpen(true)}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>سياسة الخصوصية</span>
          </button>
          <span className="text-border">•</span>
          <button
            onClick={() => setSecurityOpen(true)}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Shield className="w-4 h-4" />
            <span>الأمان والحماية</span>
          </button>
        </div>

        {/* Copyright */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          © 2025 جميع الحقوق محفوظة
        </p>
      </div>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent
          className="max-w-2xl max-h-[80vh] overflow-y-auto"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              سياسة الخصوصية
            </DialogTitle>
            <DialogDescription className="text-right">
              آخر تحديث: 17 أكتوبر 2025
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-right leading-relaxed">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                1. جمع المعلومات
              </h3>
              <p className="text-muted-foreground">
                نحن نجمع المعلومات التي تقدمها لنا مباشرة عند استخدام خدماتنا،
                بما في ذلك الاسم وعنوان البريد الإلكتروني ومعلومات الاتصال
                الأخرى. كما نجمع معلومات تلقائياً حول استخدامك للموقع من خلال
                ملفات تعريف الارتباط وتقنيات التتبع المماثلة.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                2. استخدام المعلومات
              </h3>
              <p className="text-muted-foreground">
                نستخدم المعلومات التي نجمعها لتوفير وتحسين خدماتنا، والتواصل
                معك، وتخصيص تجربتك، وحماية أمن الموقع. لن نشارك معلوماتك الشخصية
                مع أطراف ثالثة دون موافقتك الصريحة، باستثناء ما يقتضيه القانون.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                3. حماية البيانات
              </h3>
              <p className="text-muted-foreground">
                نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير
                المصرح به أو الاستخدام أو الكشف. نستخدم التشفير وبروتوكولات
                الأمان الصناعية القياسية لحماية بياناتك.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                4. حقوقك
              </h3>
              <p className="text-muted-foreground">
                لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها.
                يمكنك أيضاً الاعتراض على معالجة بياناتك أو طلب تقييد المعالجة.
                للممارسة هذه الحقوق، يرجى الاتصال بنا عبر البريد الإلكتروني.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                5. ملفات تعريف الارتباط
              </h3>
              <p className="text-muted-foreground">
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك
                التحكم في استخدام ملفات تعريف الارتباط من خلال إعدادات المتصفح
                الخاص بك. لمزيد من المعلومات، يرجى الاطلاع على سياسة ملفات تعريف
                الارتباط الخاصة بنا.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                6. التغييرات على السياسة
              </h3>
              <p className="text-muted-foreground">
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي
                تغييرات جوهرية عن طريق نشر السياسة الجديدة على هذه الصفحة وتحديث
                تاريخ "آخر تحديث" أعلاه.
              </p>
            </section>
          </div>
          <div className="flex justify-end mt-6">
            <Button onClick={() => setPrivacyOpen(false)}>إغلاق</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Security Dialog */}
      <Dialog open={securityOpen} onOpenChange={setSecurityOpen}>
        <DialogContent
          className="max-w-2xl max-h-[80vh] overflow-y-auto"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              الأمان والحماية
            </DialogTitle>
            <DialogDescription className="text-right">
              التزامنا بحماية بياناتك
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-right leading-relaxed">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                التشفير والأمان
              </h3>
              <p className="text-muted-foreground">
                نستخدم بروتوكول SSL/TLS لتشفير جميع البيانات المنقولة بين متصفحك
                وخوادمنا. هذا يضمن أن معلوماتك الشخصية محمية من الاعتراض أثناء
                النقل. جميع البيانات الحساسة مشفرة أيضاً عند التخزين.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                أدوار الأمان والصلاحيات
              </h3>
              <div className="space-y-3">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-1">
                    المستخدم العادي
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    الوصول إلى المحتوى العام، عرض الملف الشخصي، والتفاعل مع
                    الروابط المتاحة.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-1">
                    المستخدم المسجل
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    جميع صلاحيات المستخدم العادي بالإضافة إلى إمكانية حفظ
                    التفضيلات والوصول إلى المحتوى الحصري.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-1">
                    المسؤول
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    صلاحيات كاملة لإدارة المحتوى، تعديل الإعدادات، ومراقبة نشاط
                    المستخدمين.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                الحماية من التهديدات
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    حماية من هجمات DDoS باستخدام شبكة توزيع المحتوى (CDN)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    جدار حماية تطبيقات الويب (WAF) لمنع الهجمات الشائعة
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>مراقبة مستمرة للأنشطة المشبوهة والتهديدات الأمنية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    نسخ احتياطية منتظمة للبيانات لضمان استمرارية الخدمة
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                الامتثال والمعايير
              </h3>
              <p className="text-muted-foreground">
                نلتزم بأفضل الممارسات الأمنية الدولية ونتوافق مع معايير حماية
                البيانات بما في ذلك GDPR وقوانين حماية البيانات المحلية. نجري
                تدقيقات أمنية منتظمة ونحدث أنظمتنا باستمرار لمواجهة التهديدات
                الناشئة.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                الإبلاغ عن المشاكل الأمنية
              </h3>
              <p className="text-muted-foreground">
                إذا اكتشفت ثغرة أمنية أو مشكلة في موقعنا، يرجى الاتصال بنا فوراً
                على security@infotams.com. نحن نقدر جهود الباحثين الأمنيين
                ونلتزم بالرد السريع على جميع التقارير.
              </p>
            </section>
          </div>
          <div className="flex justify-end mt-6">
            <Button onClick={() => setSecurityOpen(false)}>إغلاق</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
