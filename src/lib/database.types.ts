export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          role: 'admin' | 'student';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          role?: 'admin' | 'student';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          role?: 'admin' | 'student';
          created_at?: string;
          updated_at?: string;
        };
      };
      categories: {
        Row: {
          id: number;
          name: string;
          description: string | null;
          image_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          description?: string | null;
          image_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          description?: string | null;
          image_url?: string | null;
          created_at?: string;
        };
      };
      courses: {
        Row: {
          id: number;
          category_id: number | null;
          title: string;
          description: string;
          image_url: string | null;
          passing_percentage: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          category_id?: number | null;
          title: string;
          description: string;
          image_url?: string | null;
          passing_percentage?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          category_id?: number | null;
          title?: string;
          description?: string;
          image_url?: string | null;
          passing_percentage?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      modules: {
        Row: {
          id: number;
          course_id: number;
          title: string;
          description: string | null;
          order: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          course_id: number;
          title: string;
          description?: string | null;
          order: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          course_id?: number;
          title?: string;
          description?: string | null;
          order?: number;
          created_at?: string;
        };
      };
      lessons: {
        Row: {
          id: number;
          module_id: number;
          title: string;
          content: string;
          video_url: string | null;
          order: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          module_id: number;
          title: string;
          content: string;
          video_url?: string | null;
          order: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          module_id?: number;
          title?: string;
          content?: string;
          video_url?: string | null;
          order?: number;
          created_at?: string;
        };
      };
      questions: {
        Row: {
          id: number;
          course_id: number;
          question_text: string;
          question_type: 'single' | 'multiple';
          points: number;
          order: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          course_id: number;
          question_text: string;
          question_type?: 'single' | 'multiple';
          points?: number;
          order: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          course_id?: number;
          question_text?: string;
          question_type?: 'single' | 'multiple';
          points?: number;
          order?: number;
          created_at?: string;
        };
      };
      answers: {
        Row: {
          id: number;
          question_id: number;
          answer_text: string;
          is_correct: boolean;
          order: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          question_id: number;
          answer_text: string;
          is_correct: boolean;
          order: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          question_id?: number;
          answer_text?: string;
          is_correct?: boolean;
          order?: number;
          created_at?: string;
        };
      };
      enrollments: {
        Row: {
          id: number;
          user_id: string;
          course_id: number;
          progress: number;
          started_at: string;
          completed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          course_id: number;
          progress?: number;
          started_at?: string;
          completed_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          course_id?: number;
          progress?: number;
          started_at?: string;
          completed_at?: string | null;
          created_at?: string;
        };
      };
      quiz_results: {
        Row: {
          id: number;
          user_id: string;
          course_id: number;
          score: number;
          total_points: number;
          percentage: number;
          passed: boolean;
          completed_at: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          course_id: number;
          score: number;
          total_points: number;
          percentage: number;
          passed: boolean;
          completed_at?: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          course_id?: number;
          score?: number;
          total_points?: number;
          percentage?: number;
          passed?: boolean;
          completed_at?: string;
          created_at?: string;
        };
      };
      certificates: {
        Row: {
          id: number;
          user_id: string;
          course_id: number;
          certificate_code: string;
          issued_at: string;
          pdf_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          course_id: number;
          certificate_code: string;
          issued_at?: string;
          pdf_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          course_id?: number;
          certificate_code?: string;
          issued_at?: string;
          pdf_url?: string | null;
          created_at?: string;
        };
      };
      orders: {
        Row: {
          id: number;
          user_id: string;
          certificate_id: number;
          amount: number;
          currency: string;
          status: 'pending' | 'completed' | 'failed' | 'refunded';
          stripe_payment_intent_id: string | null;
          paid_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          certificate_id: number;
          amount: number;
          currency?: string;
          status?: 'pending' | 'completed' | 'failed' | 'refunded';
          stripe_payment_intent_id?: string | null;
          paid_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          certificate_id?: number;
          amount?: number;
          currency?: string;
          status?: 'pending' | 'completed' | 'failed' | 'refunded';
          stripe_payment_intent_id?: string | null;
          paid_at?: string | null;
          created_at?: string;
        };
      };
      site_config: {
        Row: {
          id: number;
          config_key: string;
          config_value: string;
          description: string | null;
          updated_at: string;
        };
        Insert: {
          id?: number;
          config_key: string;
          config_value: string;
          description?: string | null;
          updated_at?: string;
        };
        Update: {
          id?: number;
          config_key?: string;
          config_value?: string;
          description?: string | null;
          updated_at?: string;
        };
      };
    };
  };
}
