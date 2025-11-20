// Exemplo LÓGICO do que aconteceria no seu servidor (API: /api/create-checkout-session)

// 1. Receber dados
const { items, amount } = req.body;

// 2. Ligar ao MySQL
// Aqui o servidor regista a nova encomenda na tabela 'encomendas' com o status "Pendente".
// O servidor verifica o stock.

// 3. Criar a sessão de Checkout no Stripe
const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
        price_data: {
            currency: 'eur', // ou 'usd', 'aed', etc.
            product_data: {
                name: item.name,
            },
            unit_amount: item.price * 100, // Preço em cêntimos
        },
        quantity: item.quantity,
    })),
    mode: 'payment',
    // URLs de redirecionamento após o pagamento
    success_url: 'http://seusite.com/success?order_id=123', // ID da encomenda gerado no MySQL
    cancel_url: 'http://seusite.com/cancel',
});

// 4. Responder ao Frontend
res.json({ sessionId: session.id });