using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NeverNote.Api.Dtos;
using NeverNote.Api.Models;

namespace NeverNote.Api.Extensions
{
    public static class DtoExtensions
    {
        public static NoteDto ToNoteDto(this Note note)
        {
            return new NoteDto()
            {
                Id = note.Id,
                Title = note.Title,
                Content = note.Content,
                CreationTime = note.CreationTime,
                ModificationTime = note.ModificationTime
            };
        }
    }
}