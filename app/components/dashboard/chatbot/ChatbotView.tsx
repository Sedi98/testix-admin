import { Bolt, ChevronDown, Funnel, Plus, Search, Send, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import {
  chatConversations,
  chatMessages,
  quickReplies,
  type ChatConversation,
  type ChatMessage,
  type ChatStatus,
} from "~/lib/chatbot"

export function ChatbotView() {
  const [selectedConversation, setSelectedConversation] = useState<ChatConversation | null>(
    chatConversations[1] ?? null,
  )

  return (
    <section className="space-y-7 text-brand-dark">
      <h1 className="text-2xl font-bold">Söhbətlər</h1>

      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="relative w-full max-w-[600px]">
          <Search
            size={24}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-500"
          />
          <input
            placeholder="ID, Ad/Soyad , Email , Telefon üzrə axtarış....."
            className="h-12 w-full rounded-xl border border-neutral-stroke bg-white px-14 text-base outline-none"
          />
          <Funnel
            size={22}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-dark"
          />
        </div>

        <div className="flex gap-6">
          <ChatSelect label="Bütün mesajlar" options={["Bütün mesajlar", "Oxunmamış", "Cavablanmış"]} />
          <ChatSelect label="Bütün statuslar" options={["Bütün statuslar", "Aktiv", "Davam edir", "Bitdi"]} />
        </div>
      </div>

      <div className="grid min-h-[760px] grid-cols-[340px_1fr] bg-white">
        <ConversationList
          selectedId={selectedConversation?.id}
          onSelect={setSelectedConversation}
        />
        <ChatPanel conversation={selectedConversation} />
      </div>
    </section>
  )
}

function ChatSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="relative inline-flex min-w-[180px] items-center">
      <span className="sr-only">{label}</span>
      <select
        defaultValue={label}
        className="h-12 w-full appearance-none rounded-xl border border-neutral-stroke bg-white px-5 pr-11 text-base font-semibold outline-none"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <ChevronDown
        size={22}
        className="pointer-events-none absolute right-4 text-brand-secondary"
      />
    </label>
  )
}

function ConversationList({
  selectedId,
  onSelect,
}: {
  selectedId?: number
  onSelect: (conversation: ChatConversation) => void
}) {
  return (
    <aside className="border-r border-neutral-stroke">
      <div className="p-4">
        <h2 className="text-base font-bold">Bütün mesajlar</h2>
        <p className="mt-2 text-sm text-neutral-500">Ümumi 5 • Oxunmamış 1</p>
      </div>
      <div>
        {chatConversations.map((conversation) => (
          <button
            key={conversation.id}
            type="button"
            onClick={() => onSelect(conversation)}
            className={`flex w-full gap-3 border-b border-neutral-stroke p-4 text-left transition-colors ${selectedId === conversation.id ? "bg-primary-0" : "bg-white hover:bg-neutral-50"
              }`}
          >
            <Avatar />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-base font-semibold">{conversation.name}</p>
                <span className="text-xs text-neutral-500">{conversation.time}</span>
              </div>
              <p className="mt-2 truncate text-sm text-neutral-500">{conversation.preview}</p>
              <div className="mt-3 flex items-center justify-between">
                <StatusPill status={conversation.status} />
                {conversation.unread && (
                  <span className="flex size-7 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                    {conversation.unread}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  )
}

function ChatPanel({ conversation }: { conversation: ChatConversation | null }) {
  if (!conversation) {
    return (
      <main className="flex flex-col">
        <EmptyChatState />
        <ChatComposer />
      </main>
    )
  }

  return (
    <main className="flex min-h-0 flex-col">
      <header className="flex h-16 items-center gap-3 border-b border-neutral-stroke px-5">
        <Avatar />
        <h2 className="text-lg font-semibold">{conversation.name}</h2>
      </header>

      <div className="flex-1 overflow-y-auto px-8 py-8">
        {chatMessages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      <ChatComposer />
    </main>
  )
}

function EmptyChatState() {
  return (
    <div className="flex flex-1 items-center justify-center text-center">
      <div>
        <p className="text-xl font-semibold">Hazırda yeni mesaj yoxdur.</p>
        <p className="mt-8 max-w-[420px] text-xl font-semibold text-neutral-500">
          Müştəri əlaqə saxladıqda söhbətlər burada avtomatik görünəcək.
        </p>
      </div>
    </div>
  )
}

function MessageBubble({ message }: { message: ChatMessage }) {
  return (
    <div>
      {message.date && (
        <div className="my-5 text-center">
          <span className="rounded-full bg-dark-blue-50 px-4 py-1 text-sm text-brand-secondary">
            {message.date}
          </span>
        </div>
      )}

      <div
        className={`mb-5 flex items-end gap-3 ${message.author === "admin" ? "justify-end" : "justify-start"
          }`}
      >
        {message.author === "customer" && <Avatar />}
        <div
          className={`max-w-[560px] rounded-2xl px-5 py-4 text-base ${message.compact ? "max-w-[260px]" : ""
            } ${message.author === "admin"
              ? "bg-brand-primary-light text-white"
              : "bg-neutral-blue text-brand-dark"
            }`}
        >
          <p>{message.text}</p>
          <p
            className={`mt-2 text-right text-xs ${message.author === "admin" ? "text-white" : "text-neutral-500"
              }`}
          >
            {message.time} {message.author === "admin" ? "✓✓" : ""}
          </p>
        </div>
      </div>
    </div>
  )
}

function ChatComposer() {
  return (
    <div className="p-5">
      <div className="rounded-xl border border-neutral-stroke bg-white p-2">
        <input
          placeholder="Type your message..."
          className="h-8 w-full px-2 text-sm outline-none"
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button className="flex size-8 items-center justify-center rounded border border-neutral-stroke">
              <Plus size={18} />
            </button>
            <button className="flex size-8 items-center justify-center rounded border border-neutral-stroke">
              <SlidersHorizontal size={18} />
            </button>
            <button className="inline-flex h-8 items-center gap-1 rounded bg-blue-50 px-3 text-sm text-blue-500">
              <Bolt size={16} />
              Quick replies
            </button>
          </div>
          <button className="flex size-8 items-center justify-center rounded-lg bg-brand-primary text-white">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <span className="block size-10 shrink-0 rounded-full ring-1 ring-neutral-stroke" />
  )
}

function StatusPill({ status }: { status: ChatStatus }) {
  const className =
    status === "Aktiv"
      ? "bg-green-700 text-white"
      : status === "Davam edir"
        ? "bg-blue-500 text-white"
        : "bg-neutral-700 text-white"

  return (
    <span className={`rounded-full px-4 py-1 text-sm font-semibold ${className}`}>
      {status}
    </span>
  )
}

export function QuickRepliesPreview() {
  return (
    <div className="rounded-xl bg-white p-4">
      {quickReplies.map((reply) => (
        <div key={reply.title} className="mb-3 last:mb-0">
          <p className="font-semibold">{reply.title}</p>
          <p className="truncate text-xs text-neutral-500">{reply.text}</p>
        </div>
      ))}
    </div>
  )
}
