import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-yellow">
      {/* Header with Contact */}
      <div className="bg-darkBrown text-white py-3">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="text-sm">ООО РепаилБел</span>
            <div className="flex items-center">
              <Icon name="Phone" size={16} className="mr-2" />
              <span className="font-bold">+375293245843</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Icon name="Clock" size={16} />
            <span className="text-sm">Круглосуточно</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-darkBrown rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-black mb-8">
              УНИЧТОЖЕНИЕ
            </h1>
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow rounded-full flex items-center justify-center mb-2">
                  🪳
                </div>
                <p className="text-xl font-bold">КЛОПОВ</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow rounded-full flex items-center justify-center mb-2">
                  🪳
                </div>
                <p className="text-xl font-bold">ТАРАКАНОВ</p>
              </div>
            </div>
            
            <div className="text-7xl font-black text-red mb-6">
              100% результат
            </div>
            
            <div className="text-4xl font-bold bg-darkGreen text-white px-8 py-4 rounded-2xl inline-block mb-8">
              Гарантия
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-yellow text-darkBrown hover:bg-lightYellow text-xl px-12 py-6 font-bold">
                <Icon name="Phone" className="mr-2" />
                ВЫЗВАТЬ СЕЙЧАС
              </Button>
              <Button variant="outline" size="lg" className="border-yellow text-yellow hover:bg-yellow hover:text-darkBrown text-xl px-12 py-6 font-bold">
                РАССЧИТАТЬ ЦЕНУ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-5xl font-black text-darkBrown text-center mb-12">НАШИ УСЛУГИ</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-darkBrown text-white border-4 border-yellow hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🪳</div>
              <CardTitle className="text-yellow text-2xl font-black">ДЕЗИНСЕКЦИЯ</CardTitle>
              <CardDescription className="text-white">Полное уничтожение насекомых</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Тараканы, клопы
                </li>
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Муравьи, блохи
                </li>
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Мухи, комары
                </li>
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Осы, моль
                </li>
              </ul>
              <Button className="w-full mt-6 bg-yellow text-darkBrown hover:bg-lightYellow font-bold text-lg py-3">
                ОТ 50 РУБ
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-darkBrown text-white border-4 border-yellow hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🐭</div>
              <CardTitle className="text-yellow text-2xl font-black">ДЕРАТИЗАЦИЯ</CardTitle>
              <CardDescription className="text-white">Избавление от грызунов</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Крысы, мыши
                </li>
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Кроты
                </li>
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Установка ловушек
                </li>
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Профилактика
                </li>
              </ul>
              <Button className="w-full mt-6 bg-yellow text-darkBrown hover:bg-lightYellow font-bold text-lg py-3">
                ОТ 70 РУБ
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-darkBrown text-white border-4 border-yellow hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">💨</div>
              <CardTitle className="text-yellow text-2xl font-black">ФУМИГАЦИЯ</CardTitle>
              <CardDescription className="text-white">Газовая обработка</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Склады
                </li>
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Зернохранилища
                </li>
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Контейнеры
                </li>
                <li className="flex items-center">
                  <Icon name="Target" size={20} className="text-yellow mr-3" />
                  Транспорт
                </li>
              </ul>
              <Button className="w-full mt-6 bg-yellow text-darkBrown hover:bg-lightYellow font-bold text-lg py-3">
                ОТ 100 РУБ
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-darkBrown py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-yellow text-center mb-12">ПОЧЕМУ МЫ?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={40} className="text-darkBrown" />
              </div>
              <h3 className="text-xl font-bold text-yellow mb-2">БЕЗОПАСНО</h3>
              <p className="text-white">Экологичные препараты</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={40} className="text-darkBrown" />
              </div>
              <h3 className="text-xl font-bold text-yellow mb-2">БЫСТРО</h3>
              <p className="text-white">Выезд в день звонка</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={40} className="text-darkBrown" />
              </div>
              <h3 className="text-xl font-bold text-yellow mb-2">ГАРАНТИЯ</h3>
              <p className="text-white">100% результат</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={40} className="text-darkBrown" />
              </div>
              <h3 className="text-xl font-bold text-yellow mb-2">ОПЫТ</h3>
              <p className="text-white">Более 15 лет</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-5xl font-black text-darkBrown text-center mb-12">ОТЗЫВЫ</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-4 border-darkBrown">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center">
                  <span className="text-darkBrown font-bold text-xl">АП</span>
                </div>
                <div>
                  <CardTitle className="text-darkBrown">Анна Петрова</CardTitle>
                  <div className="flex text-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">
                "Избавились от тараканов за один день! Очень довольны результатом. 
                Мастера работали аккуратно."
              </p>
            </CardContent>
          </Card>

          <Card className="border-4 border-darkBrown">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center">
                  <span className="text-darkBrown font-bold text-xl">ИС</span>
                </div>
                <div>
                  <CardTitle className="text-darkBrown">Игорь Сидоров</CardTitle>
                  <div className="flex text-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">
                "Профессиональная команда! Быстро справились с крысами в подвале. 
                Рекомендую всем!"
              </p>
            </CardContent>
          </Card>

          <Card className="border-4 border-darkBrown">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center">
                  <span className="text-darkBrown font-bold text-xl">МК</span>
                </div>
                <div>
                  <CardTitle className="text-darkBrown">Мария Козлова</CardTitle>
                  <div className="flex text-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">
                "Отличная работа! Клопы исчезли полностью. Цена очень доступная. 
                Спасибо большое!"
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-yellow py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-darkBrown text-center mb-12">ЗАКАЗАТЬ УСЛУГУ</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-darkBrown mb-6">СВЯЖИТЕСЬ С НАМИ</h3>
                <div className="space-y-6">
                  <div className="flex items-center text-darkBrown text-xl">
                    <Icon name="Phone" size={24} className="mr-4 text-red" />
                    <span className="font-bold">+375293245843</span>
                  </div>
                  <div className="flex items-center text-darkBrown text-xl">
                    <Icon name="Mail" size={24} className="mr-4 text-red" />
                    <span>info@repailbel.by</span>
                  </div>
                  <div className="flex items-center text-darkBrown text-xl">
                    <Icon name="MapPin" size={24} className="mr-4 text-red" />
                    <span>г. Минск, вся Беларусь</span>
                  </div>
                  <div className="flex items-center text-darkBrown text-xl">
                    <Icon name="Clock" size={24} className="mr-4 text-red" />
                    <span>Круглосуточно, 7 дней в неделю</span>
                  </div>
                </div>
              </div>
              <Card className="border-4 border-darkBrown">
                <CardHeader>
                  <CardTitle className="text-darkBrown text-2xl">БЫСТРАЯ ЗАЯВКА</CardTitle>
                  <CardDescription className="text-lg">Мы перезвоним через 5 минут</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" className="text-lg py-3" />
                  <Input placeholder="Телефон" type="tel" className="text-lg py-3" />
                  <Textarea placeholder="Опишите проблему" rows={4} className="text-lg" />
                  <Button className="w-full bg-darkBrown hover:bg-red text-yellow text-xl py-4 font-bold">
                    <Icon name="Phone" className="mr-2" />
                    ЗАКАЗАТЬ ЗВОНОК
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkBrown py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-yellow text-2xl font-bold mb-4">ООО РепаилБел</div>
          <div className="text-white text-lg mb-4">
            Профессиональные услуги дезинфекции по всей Беларуси
          </div>
          <div className="text-yellow text-xl font-bold">
            Телефон: +375293245843
          </div>
          <div className="text-white/60 mt-6">
            © 2024 ООО РепаилБел. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}